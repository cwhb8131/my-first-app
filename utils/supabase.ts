import { createClient } from '@supabase/supabase-js';


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;  
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY as string;
const supabaseroleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;


// Supabase クライアントを作成
const supabase = createClient(supabaseUrl, supabaseAnonKey, supabaseroleKey);



export { supabase };



