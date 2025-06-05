import { execSync } from 'child_process';

const name = process.argv[2];

if (!name) {
  console.error(
    '❌ Please provide a migration name. Usage: npm run migrate -- your_migration_name',
  );
  process.exit(1);
}

const command = `dotenv -e .env.local -- npx prisma migrate dev --name ${name}`;
console.log(`🚀 Running: ${command}`);

execSync(command, { stdio: 'inherit' });
