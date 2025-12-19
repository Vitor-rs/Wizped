const { createClient } = require('@libsql/client')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

if (!url || !authToken) {
  console.error('Missing TURSO credentials')
  process.exit(1)
}

const client = createClient({
  url,
  authToken,
})

async function main() {
  console.log('Clearing migration history for 0000...')
  try {
    // Drizzle stores hashes. We just want to delete the row so it thinks it never ran.
    // The table is __drizzle_migrations. There isn't a guaranteed ID column we know without peeking,
    // but usually deleting all or by name if possible. Drizzle usually tracks by index.
    // Let's just delete everything since this is migration 0000 and we want to re-init.
    await client.execute('DELETE FROM __drizzle_migrations')
    console.log('Migration history cleared.')
  } catch (e) {
    console.error('Error clearing history:', e)
    process.exit(1)
  }
}

main()
