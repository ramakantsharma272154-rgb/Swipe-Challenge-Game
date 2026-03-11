import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "comzmfrgieaztyzugllr";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvbXptZnJnaWVhenR5enVnbGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDk0NDYsImV4cCI6MjA4ODcyNTQ0Nn0.sMKT-llnwlYaM_0XsBB9pD3UL7bRu6j_7tAPeXUQ8_c";

export const supabase = createClient(supabaseUrl, supabaseKey);
