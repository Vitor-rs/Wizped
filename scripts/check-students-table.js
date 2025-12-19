const { createClient } = require('@libsql/client')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

const client = createClient({
  url,
  authToken,
})

async function main() {
  console.log('Checking students table...')
  try {
    await client.execute('SELECT count(*) as count FROM students')
    console.log('✅ Students table exists!')
  } catch (e) {
    console.error('❌ Error querying students table:', e.message)
  }
}

void main()
