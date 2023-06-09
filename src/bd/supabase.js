import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ipgidkteeqkgypqocrwg.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZ2lka3RlZXFrZ3lwcW9jcndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODAzNzIsImV4cCI6MTk5Mjc1NjM3Mn0.5-rhY7Qv05eEDbhDhIBgTsQCZUgfb0S6uPQrg-5UEF8'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)