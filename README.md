# NileCare - Nile King's Specialist Hospital

A next-generation, patient-centered digital healthcare platform that combines premium medical services with advanced technology.

## Features

- 🏥 **Hospital Website** - Professional medical website with modern design
- 📅 **Appointment Booking** - Easy online appointment scheduling
- 🤖 **AI Triage Tool** - Intelligent symptom assessment
- 👨‍⚕️ **Doctor Profiles** - Comprehensive doctor information
- 🔐 **Admin Dashboard** - Secure admin panel for managing appointments
- 📱 **Responsive Design** - Works perfectly on all devices

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **AI**: Google AI (Gemini)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Supabase recommended)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Nile-Kings-Specialist-Hospital
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Add your database URL and API keys:
```
DATABASE_URL="postgresql://username:password@host:port/database"
GOOGLE_AI_API_KEY="your-google-ai-api-key"
```

4. Set up the database
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) to view the application.

## Admin Access

- **URL**: `/admin/login`
- **Username**: `admin`
- **Password**: `admin123`

## Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `GOOGLE_AI_API_KEY`
3. Deploy - the build process will automatically:
   - Run `prisma generate`
   - Build the Next.js application

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `DATABASE_URL` - Your PostgreSQL connection string
- `GOOGLE_AI_API_KEY` - Google AI API key for the AI Triage feature

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── admin/          # Admin dashboard pages
│   ├── api/            # API routes
│   └── ...             # Other pages
├── components/         # Reusable UI components
├── lib/               # Utility functions and data
├── db/                # Database configuration
└── ai/                # AI integration files
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
