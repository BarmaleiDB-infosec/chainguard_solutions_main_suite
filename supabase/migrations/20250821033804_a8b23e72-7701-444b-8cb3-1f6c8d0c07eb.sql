-- Enable RLS on n8n_chat_histories table
ALTER TABLE public.n8n_chat_histories ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for chat histories (users can only access their own sessions)
CREATE POLICY "Users can view their own chat sessions" 
ON public.n8n_chat_histories 
FOR SELECT 
USING (session_id = auth.uid()::text);

CREATE POLICY "Users can insert their own chat messages" 
ON public.n8n_chat_histories 
FOR INSERT 
WITH CHECK (session_id = auth.uid()::text);

-- Update function search path for security
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$function$;