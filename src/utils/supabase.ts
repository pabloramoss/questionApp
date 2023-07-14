import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bilfodlqdkporhdmqwqv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey!);

export async function getQuestion(id: string) {
  const question = await supabase
    .from('questions')
    .select()
    .eq('id', id)
    .single()
    .then(({ data }) => data as { id: string; text: string });

  return question;
}

export async function getAllQuestions() {
  const questions = await supabase
    .from('questions')
    .select()
    .then(({ data }) => data as { id: string; text: string }[]);

  return questions;
}
