import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

    // Check environment variables
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        details: {
          hasUrl: !!supabaseUrl,
          hasKey: !!supabaseKey,
          urlValue: supabaseUrl,
          keyPrefix: supabaseKey ? supabaseKey.substring(0, 20) + '...' : 'missing'
        }
      }, { status: 500 });
    }

    // Test basic fetch to Supabase
    const testUrl = `${supabaseUrl}/auth/v1/health`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    const data = await response.text();
    
    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      healthCheck: data,
      config: {
        url: supabaseUrl,
        keyFormat: supabaseKey.startsWith('eyJ') ? 'JWT (correct)' : 'Non-JWT (possibly incorrect)',
        keyPrefix: supabaseKey.substring(0, 20) + '...'
      }
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
      errorName: err.name,
      isTimeout: err.name === 'AbortError',
      suggestion: err.name === 'AbortError' 
        ? 'Connection timeout - check if your Supabase project is paused or if the API key is correct'
        : 'Check your Supabase credentials and project status'
    }, { status: 500 });
  }
}
