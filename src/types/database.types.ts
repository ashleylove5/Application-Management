export interface Company {
  id: string;
  name: string;
  website?: string;
  location?: string;
  industry?: string;
  created_at: string;
}

export interface JobApplication {
  id: string;
  user_id: string;
  company_id: string;
  job_title: string;
  job_description?: string;
  application_date: string;
  status: 'applied' | 'interview' | 'rejected' | 'offer' | 'accepted';
  interview_date?: string;
  feedback?: string;
  salary_offer?: number;
  created_at: string;
  company?: Company;
}