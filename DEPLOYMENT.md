# Deployment Guide for ByteBazaar

This guide will help you connect your Vercel frontend to your Render backend correctly.

## 1. Backend (Render)
- Ensure all environment variables from `.env` are added in the Render Dashboard (Environment tab).
- Your backend URL will look something like `https://bytebazaar-backend.onrender.com`.

## 2. Frontend (Vercel)
The code has been updated to use a central API instance. You need to tell Vercel where your backend is.

1. Go to your **Vercel Dashboard**.
2. Select your `ByteBazaar` project.
3. Go to **Settings** > **Environment Variables**.
4. Add the following variable:
   - **Key:** `VITE_API_BASE_URL`
   - **Value:** `https://your-backend-url.onrender.com` (Replace with your actual Render URL)
5. **Redeploy** your frontend for the changes to take effect.

## Technical Changes Made:
- **Centralized API**: All requests now go through `frontend/src/api/api.js`.
- **Automatic Auth**: Tokens are now automatically added to headers if available.
- **Removed Hardcoded URLs**: No more `http://localhost:3000` in the frontend components.
