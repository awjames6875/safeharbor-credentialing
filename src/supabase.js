import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://habpialjdsyczxxkkbcj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYnBpYWxqZHN5Y3p4eGtrYmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMzg2MzUsImV4cCI6MjA4MTM5ODYzNX0.k5G4_7qPWiMFvHIlaWzwuvvoeBJf9bUEg7ySvzNyVXQ';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Load tracker data from Supabase
export async function loadFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('credentialing_tracker')
      .select('*')
      .eq('id', 'shared')
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // No rows yet
      console.error('Supabase load error:', error);
      return null;
    }
    return data;
  } catch (e) {
    console.error('Supabase connection error:', e);
    return null;
  }
}

// Save tracker data to Supabase
export async function saveToSupabase(trackerData, weeklyChecks, updatedBy) {
  try {
    const { error } = await supabase
      .from('credentialing_tracker')
      .upsert({
        id: 'shared',
        tracker_data: trackerData,
        weekly_checks: weeklyChecks || {},
        updated_at: new Date().toISOString(),
        updated_by: updatedBy || 'unknown'
      });
    
    if (error) {
      console.error('Supabase save error:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.error('Supabase save error:', e);
    return false;
  }
}

// Subscribe to real-time changes
export function subscribeToChanges(callback) {
  return supabase
    .channel('credentialing-changes')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'credentialing_tracker' },
      (payload) => {
        callback(payload.new);
      }
    )
    .subscribe();
}
