-- Enable Row Level Security
alter table public.profiles
enable row level security;


-- Users can read only their own profile
create policy "Users can view own profile"
on public.profiles
for select
to authenticated
using (
    auth.uid() = id
);


-- Users can create only their own profile
create policy "Users can insert own profile"
on public.profiles
for insert
to authenticated
with check (
    auth.uid() = id
);


-- Users can update only their own profile
create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (
    auth.uid() = id
)
with check (
    auth.uid() = id
);