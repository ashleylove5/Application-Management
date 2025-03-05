/*
  # Initial Schema for Job Application Tracker

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text)
      - `website` (text, optional)
      - `location` (text, optional)
      - `industry` (text, optional)
      - `created_at` (timestamp)
    
    - `job_applications`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `company_id` (uuid, references companies)
      - `job_title` (text)
      - `job_description` (text, optional)
      - `application_date` (date)
      - `status` (text, enum)
      - `interview_date` (date, optional)
      - `feedback` (text, optional)
      - `salary_offer` (numeric, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to:
      - Read their own data
      - Create new records
      - Update their own records
*/

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  website text,
  location text,
  industry text,
  created_at timestamptz DEFAULT now()
);

-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  company_id uuid REFERENCES companies NOT NULL,
  job_title text NOT NULL,
  job_description text,
  application_date date NOT NULL DEFAULT CURRENT_DATE,
  status text NOT NULL CHECK (status IN ('applied', 'interview', 'rejected', 'offer', 'accepted')),
  interview_date date,
  feedback text,
  salary_offer numeric,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policies for companies
CREATE POLICY "Users can read companies"
  ON companies
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create companies"
  ON companies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policies for job_applications
CREATE POLICY "Users can read own applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own applications"
  ON job_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own applications"
  ON job_applications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);