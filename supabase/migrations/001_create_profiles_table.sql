create table public.profiles (
    id uuid references auth.users(id) primary key,
    full_name text,
    email text,
    college text,
    target_role text,
    career_goal text,
    avatar_url text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);