# Google OAuth Setup for Supabase

## Steps to Enable Google Login

### 1. Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure the consent screen if prompted:
   - User Type: External
   - App name: Dhwani
   - User support email: your-email@example.com
   - Developer contact: your-email@example.com
6. For Application Type, select **Web application**
7. Add Authorized JavaScript origins:
   ```
   http://localhost:3000
   https://your-production-domain.com
   ```
8. Add Authorized redirect URIs:
   ```
   https://<your-supabase-project-ref>.supabase.co/auth/v1/callback
   ```
   To find your Supabase project ref:
   - Go to your Supabase project dashboard
   - Look at the URL: `https://supabase.com/dashboard/project/<project-ref>`
   - Or find it in Settings → API → Project URL

9. Click **Create** and save your:
   - Client ID
   - Client Secret

### 2. Configure Supabase

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Authentication** → **Providers**
4. Find **Google** in the list and click to configure
5. Enable the Google provider
6. Paste your **Client ID** from step 1
7. Paste your **Client Secret** from step 1
8. Click **Save**

### 3. Update Site URL and Redirect URLs

1. In Supabase Dashboard, go to **Authentication** → **URL Configuration**
2. Set **Site URL** to your production domain: `https://your-domain.com`
3. Add **Redirect URLs**:
   ```
   http://localhost:3000/auth/callback
   https://your-production-domain.com/auth/callback
   ```

### 4. Test the Integration

1. Run your development server: `npm run dev`
2. Navigate to `/enter`
3. Click **Continue with Google**
4. Sign in with your Google account
5. You should be redirected back to your app and logged in

## Troubleshooting

- **"Redirect URI mismatch"**: Ensure the redirect URI in Google Console exactly matches your Supabase callback URL
- **"Invalid client"**: Double-check that you've copied the Client ID and Secret correctly
- **User not redirected after login**: Verify Site URL and Redirect URLs are configured in Supabase

## Security Notes

- Keep your Client Secret secure and never commit it to version control
- For production, use HTTPS for all redirect URLs
- Regularly review authorized domains in Google Console
