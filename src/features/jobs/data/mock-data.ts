export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  candidatesCount: number
  totalPositions: number
  overdueDays: number
  newCandidates: number
  archivedCandidates: number
  isOnline: boolean
  isPriority: boolean
  assignee?: string
}

export interface Candidate {
  id: string
  firstName: string
  lastName: string
  initials: string
  email: string
  phone: string
  source: string
  sourceDetail: string
  appliedDate: string
  tags: string
  owner: string
  ownerInitials: string
  stage: string
  daysInStage: number
  availableDays: number
  experience: string
  location: string
  currentSalary: string
  expectedSalary: string
  skills: string[]
  resume: string
}

export interface PipelineStage {
  id: string
  label: string
  count: number
  isSuccess?: boolean
  isRejected?: boolean
}

export interface FilterOption {
  id: string
  label: string
  value: string
}

export const mockData = {
  jobTypes: [
    { id: 'active', label: 'Active Jobs', count: 3 },
    { id: 'closed', label: 'Closed Jobs', count: 5 },
    { id: 'draft', label: 'Draft Jobs', count: 2 },
    { id: 'all', label: 'All Jobs', count: 10 },
  ],

  jobs: [
    {
      id: 'test-job',
      title: 'Test Job',
      department: 'Management Department',
      location: 'Baner',
      type: 'Full Time',
      experience: '2 - 5 years',
      candidatesCount: 0,
      totalPositions: 1,
      overdueDays: 7,
      newCandidates: 0,
      archivedCandidates: 1,
      isOnline: true,
      isPriority: false,
    },
    {
      id: 'react-developer',
      title: 'React Developer',
      department: 'Engineering',
      location: 'Baner',
      type: 'Full Time',
      experience: '3 - 8 years',
      candidatesCount: 1,
      totalPositions: 10,
      overdueDays: 11,
      newCandidates: 0,
      archivedCandidates: 1,
      isOnline: true,
      isPriority: true,
      assignee: 'ST',
    },
    {
      id: 'hr-recruiter',
      title: 'HR Recruiter',
      department: 'Human Resource',
      location: 'Baner',
      type: 'Full Time',
      experience: '1 - 3 years',
      candidatesCount: 0,
      totalPositions: 2,
      overdueDays: 21,
      newCandidates: 0,
      archivedCandidates: 1,
      isOnline: true,
      isPriority: false,
      assignee: 'ST',
    },
  ],

  candidates: [
    {
      id: '1',
      firstName: 'Ananya',
      middleName: '',
      lastName: 'Sharma',
      email: 'ananya.sharma@example.com',
      mobile: '9876543210',
      stage: '1st Round - Technical Interview',
      source: 'LinkedIn',
      sourceTags: 'professional-network',
      availableToJoin: 30,
      currentLocation: 'Mumbai',
      preferredLocation: 'Bangalore',
      gender: 'Female',
      dateOfBirth: new Date('1994-05-21'),
      appliedDate: new Date('2025-03-20'),
      daysInStage: 26,
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: {
        _id: '660f21f5d2bc1c4c9f776abc',
        name: 'Amit Kulkarni',
        email: 'amit.kulkarni@company.com',
      },
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: [
        {
          companyName: 'Tech Solutions',
          jobTitle: 'Frontend Developer',
          currentlyWorking: true,
          joiningDate: new Date('2021-06-01'),
          location: 'Mumbai',
        },
      ],
      education: [
        {
          course: 'B.Tech',
          specialization: 'Computer Science',
          startDate: new Date('2012-08-01'),
          endDate: new Date('2016-06-30'),
          university: 'Mumbai University',
          location: 'Mumbai',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1200000 },
        expectedSalary: { amount: 1600000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/ananya-sharma.pdf',
      additionalDocuments: [],
      tags: ['Frontend', 'React'],
      statusHistory: [
        {
          status: 'sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '2',
      firstName: 'Ravi',
      middleName: 'Kumar',
      lastName: 'Verma',
      email: 'ravi.verma@example.com',
      mobile: '9123456789',
      stage: 'Preboarding',
      source: 'Referral',
      sourceTags: 'employee-referral',
      availableToJoin: 15,
      currentLocation: 'Delhi',
      preferredLocation: 'Remote',
      gender: 'Male',
      dateOfBirth: new Date('1990-12-15'),
      appliedDate: new Date('2025-03-01'),
      daysInStage: 45,
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: {
        _id: '660f21f5d2bc1c4c9f776abc',
        name: 'Amit Kulkarni',
        email: 'amit.kulkarni@company.com',
      },
      skills: ['Python', 'Django', 'AWS'],
      experience: [
        {
          companyName: 'CloudNet',
          jobTitle: 'Backend Engineer',
          currentlyWorking: false,
          joiningDate: new Date('2019-04-01'),
          relievingDate: new Date('2023-01-15'),
          location: 'Delhi',
        },
      ],
      education: [
        {
          course: 'MCA',
          specialization: 'Information Technology',
          startDate: new Date('2014-07-01'),
          endDate: new Date('2017-06-30'),
          university: 'Delhi University',
          location: 'Delhi',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1000000 },
        expectedSalary: { amount: 1400000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/ravi-verma.pdf',
      additionalDocuments: [
        'https://s3.amazonaws.com/docs/ravi-certifications.pdf',
      ],
      tags: ['Backend', 'Python'],
      statusHistory: [
        {
          status: 'interviewing',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'preboarding',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '3',
      firstName: 'Meera',
      middleName: '',
      lastName: 'Nair',
      email: 'meera.nair@example.com',
      mobile: '9988776655',
      stage: 'Sourced',
      source: 'Naukri',
      sourceTags: 'job-board',
      availableToJoin: 45,
      currentLocation: 'Kochi',
      preferredLocation: 'Chennai',
      gender: 'Female',
      dateOfBirth: new Date('1996-03-11'),
      appliedDate: new Date('2025-04-10'),
      daysInStage: 5,
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: {
        _id: '660f21f5d2bc1c4c9f776abc',
        name: 'Amit Kulkarni',
        email: 'amit.kulkarni@company.com',
      },
      skills: ['Java', 'Spring Boot', 'Microservices'],
      experience: [],
      education: [
        {
          course: 'B.E.',
          specialization: 'IT',
          startDate: new Date('2013-07-01'),
          endDate: new Date('2017-06-30'),
          university: 'CUSAT',
          location: 'Kochi',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 800000 },
        expectedSalary: { amount: 1100000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/meera-nair.pdf',
      additionalDocuments: [],
      tags: ['Java', 'Fresher'],
      statusHistory: [
        {
          status: 'sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '4',
      firstName: 'Arjun',
      middleName: 'R.',
      lastName: 'Menon',
      email: 'arjun.menon@example.com',
      mobile: '9012345678',
      stage: '2nd Round - Final Technical Interview',
      source: 'Careers Page',
      sourceTags: 'website',
      availableToJoin: 7,
      currentLocation: 'Hyderabad',
      preferredLocation: 'Hyderabad',
      gender: 'Male',
      dateOfBirth: new Date('1992-11-03'),
      appliedDate: new Date('2025-03-28'),
      daysInStage: 18,
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: {
        _id: '660f21f5d2bc1c4c9f776abc',
        name: 'Amit Kulkarni',
        email: 'amit.kulkarni@company.com',
      },
      skills: ['DevOps', 'Docker', 'Kubernetes'],
      experience: [
        {
          companyName: 'InnoTech',
          jobTitle: 'DevOps Engineer',
          currentlyWorking: true,
          joiningDate: new Date('2020-02-01'),
          location: 'Hyderabad',
        },
      ],
      education: [
        {
          course: 'B.Tech',
          specialization: 'Electronics',
          startDate: new Date('2010-08-01'),
          endDate: new Date('2014-05-31'),
          university: 'IIT Hyderabad',
          location: 'Hyderabad',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1500000 },
        expectedSalary: { amount: 1800000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/arjun-menon.pdf',
      additionalDocuments: [],
      tags: ['DevOps'],
      statusHistory: [
        {
          status: 'sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'technical-interview-2',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '5',
      firstName: 'Sneha',
      middleName: '',
      lastName: 'Patil',
      email: 'sneha.patil@example.com',
      mobile: '9100001234',
      stage: 'HR Interview',
      source: 'Campus',
      sourceTags: 'campus',
      availableToJoin: 0,
      currentLocation: 'Pune',
      preferredLocation: 'Pune',
      gender: 'Female',
      dateOfBirth: new Date('1998-09-25'),
      appliedDate: new Date('2025-04-05'),
      daysInStage: 10,
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: {
        _id: '660f21f5d2bc1c4c9f776abc',
        name: 'Amit Kulkarni',
        email: 'amit.kulkarni@company.com',
      },
      skills: ['React', 'Redux', 'HTML', 'CSS'],
      experience: [
        {
          companyName: 'FreshTech',
          jobTitle: 'Intern',
          currentlyWorking: false,
          joiningDate: new Date('2023-01-01'),
          relievingDate: new Date('2023-06-30'),
          location: 'Pune',
        },
      ],
      education: [
        {
          course: 'BCA',
          specialization: 'Computer Applications',
          startDate: new Date('2019-06-01'),
          endDate: new Date('2022-05-31'),
          university: 'Pune University',
          location: 'Pune',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 0 },
        expectedSalary: { amount: 600000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/sneha-patil.pdf',
      additionalDocuments: [],
      tags: ['Fresher', 'Frontend'],
      statusHistory: [
        {
          status: 'hr-interview',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '6',
      firstName: 'Priya',
      middleName: '',
      lastName: 'Joshi',
      email: 'priya.joshi@example.com',
      mobile: '9876512345',
      stage: 'MCQ Assessment',
      stageId: 'mcq-assessment',
      source: 'LinkedIn',
      sourceTags: 'Professional Network',
      appliedDate: new Date('2025-04-10'),
      daysInStage: 5,
      currentLocation: 'Pune',
      preferredLocation: 'Remote',
      gender: 'Female',
      dateOfBirth: new Date('1995-08-12'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Angular', 'TypeScript', 'RxJS'],
      experience: [
        {
          companyName: 'WebWings',
          jobTitle: 'Frontend Engineer',
          currentlyWorking: true,
          joiningDate: new Date('2022-01-10'),
          location: 'Pune',
        },
      ],
      education: [
        {
          course: 'B.Sc',
          specialization: 'Computer Science',
          startDate: new Date('2013-06-01'),
          endDate: new Date('2016-05-31'),
          university: 'Savitribai Phule Pune University',
          location: 'Pune',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 950000 },
        expectedSalary: { amount: 1200000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/priya-joshi.pdf',
      additionalDocuments: [],
      tags: ['Angular', 'MCQ Stage'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'MCQ Assessment',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '7',
      firstName: 'Raj',
      middleName: '',
      lastName: 'Shetty',
      email: 'raj.shetty@example.com',
      mobile: '9123409876',
      stage: 'MCQ Assessment',
      stageId: 'mcq-assessment',
      source: 'Naukri',
      sourceTags: 'Job Portal',
      appliedDate: new Date('2025-04-12'),
      daysInStage: 3,
      currentLocation: 'Bangalore',
      preferredLocation: 'Mumbai',
      gender: 'Male',
      dateOfBirth: new Date('1992-04-25'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Java', 'Spring Boot'],
      experience: [
        {
          companyName: 'InfoSoft',
          jobTitle: 'Software Engineer',
          currentlyWorking: false,
          joiningDate: new Date('2020-03-01'),
          relievingDate: new Date('2023-11-30'),
          location: 'Bangalore',
        },
      ],
      education: [
        {
          course: 'B.Tech',
          specialization: 'IT',
          startDate: new Date('2010-07-01'),
          endDate: new Date('2014-06-30'),
          university: 'VTU',
          location: 'Belgaum',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1100000 },
        expectedSalary: { amount: 1400000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/raj-shetty.pdf',
      additionalDocuments: [],
      tags: ['Backend', 'Java'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'MCQ Assessment',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '8',
      firstName: 'Tanvi',
      middleName: '',
      lastName: 'Deshmukh',
      email: 'tanvi.deshmukh@example.com',
      mobile: '9098765432',
      stage: 'MCQ Assessment',
      stageId: 'mcq-assessment',
      source: 'Indeed',
      sourceTags: 'Job Board',
      appliedDate: new Date('2025-04-11'),
      daysInStage: 4,
      currentLocation: 'Nagpur',
      preferredLocation: 'Pune',
      gender: 'Female',
      dateOfBirth: new Date('1997-01-05'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Python', 'Flask', 'MySQL'],
      experience: [
        {
          companyName: 'Codeverse',
          jobTitle: 'Backend Developer',
          currentlyWorking: true,
          joiningDate: new Date('2021-09-01'),
          location: 'Nagpur',
        },
      ],
      education: [
        {
          course: 'BCA',
          specialization: 'Computer Applications',
          startDate: new Date('2015-06-01'),
          endDate: new Date('2018-05-31'),
          university: 'RTMNU',
          location: 'Nagpur',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 700000 },
        expectedSalary: { amount: 1000000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/tanvi-deshmukh.pdf',
      additionalDocuments: [],
      tags: ['Python', 'MCQ'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'MCQ Assessment',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '9',
      firstName: 'Karan',
      middleName: 'S.',
      lastName: 'Kapoor',
      email: 'karan.kapoor@example.com',
      mobile: '9988007766',
      stage: 'MCQ Assessment',
      stageId: 'mcq-assessment',
      source: 'Referral',
      sourceTags: 'Employee Referral',
      appliedDate: new Date('2025-04-13'),
      daysInStage: 2,
      currentLocation: 'Chandigarh',
      preferredLocation: 'Gurgaon',
      gender: 'Male',
      dateOfBirth: new Date('1993-07-30'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['React', 'Next.js', 'Node.js'],
      experience: [
        {
          companyName: 'FullStack Labs',
          jobTitle: 'Full Stack Developer',
          currentlyWorking: true,
          joiningDate: new Date('2022-05-01'),
          location: 'Chandigarh',
        },
      ],
      education: [
        {
          course: 'M.Sc',
          specialization: 'Computer Science',
          startDate: new Date('2013-06-01'),
          endDate: new Date('2015-05-31'),
          university: 'Panjab University',
          location: 'Chandigarh',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1300000 },
        expectedSalary: { amount: 1700000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/karan-kapoor.pdf',
      additionalDocuments: [],
      tags: ['Full Stack', 'React'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'MCQ Assessment',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '10',
      firstName: 'Divya',
      middleName: 'R.',
      lastName: 'Pillai',
      email: 'divya.pillai@example.com',
      mobile: '9112233445',
      stage: 'MCQ Assessment',
      stageId: 'mcq-assessment',
      source: 'Careers Page',
      sourceTags: 'Organic',
      appliedDate: new Date('2025-04-08'),
      daysInStage: 7,
      currentLocation: 'Thiruvananthapuram',
      preferredLocation: 'Remote',
      gender: 'Female',
      dateOfBirth: new Date('1994-11-19'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Java', 'JUnit', 'API Testing'],
      experience: [
        {
          companyName: 'QATech',
          jobTitle: 'QA Engineer',
          currentlyWorking: true,
          joiningDate: new Date('2019-06-01'),
          location: 'Thiruvananthapuram',
        },
      ],
      education: [
        {
          course: 'B.Tech',
          specialization: 'Information Technology',
          startDate: new Date('2010-08-01'),
          endDate: new Date('2014-05-31'),
          university: 'Kerala University',
          location: 'Trivandrum',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 900000 },
        expectedSalary: { amount: 1100000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/divya-pillai.pdf',
      additionalDocuments: [],
      tags: ['QA', 'Java'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
        {
          status: 'MCQ Assessment',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '11',
      firstName: 'Sneha',
      middleName: '',
      lastName: 'Kulkarni',
      email: 'sneha.kulkarni@example.com',
      mobile: '9876543101',
      stage: 'Sourced',
      stageId: 'sourced',
      source: 'LinkedIn',
      sourceTags: ['LinkedIn', 'Job Search'],
      appliedDate: new Date('2025-04-14'),
      daysInStage: 1,
      currentLocation: 'Mumbai',
      preferredLocation: 'Pune',
      gender: 'Female',
      dateOfBirth: new Date('1996-03-22'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['React', 'Redux', 'HTML', 'CSS'],
      experience: [
        {
          companyName: 'Frontend Factory',
          jobTitle: 'React Developer',
          currentlyWorking: true,
          joiningDate: new Date('2023-03-01'),
          location: 'Mumbai',
        },
      ],
      education: [
        {
          course: 'B.Tech',
          specialization: 'Computer Engineering',
          startDate: new Date('2014-06-01'),
          endDate: new Date('2018-05-31'),
          university: 'Mumbai University',
          location: 'Mumbai',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 800000 },
        expectedSalary: { amount: 1000000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/sneha-kulkarni.pdf',
      additionalDocuments: [],
      tags: ['Frontend', 'React'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '12',
      firstName: 'Aman',
      middleName: '',
      lastName: 'Gupta',
      email: 'aman.gupta@example.com',
      mobile: '9876543199',
      stage: 'Sourced',
      stageId: 'sourced',
      source: 'Indeed',
      sourceTags: ['Indeed', 'Organic'],
      appliedDate: new Date('2025-04-13'),
      daysInStage: 2,
      currentLocation: 'Noida',
      preferredLocation: 'Bangalore',
      gender: 'Male',
      dateOfBirth: new Date('1990-09-15'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Java', 'Spring Boot', 'Microservices'],
      experience: [
        {
          companyName: 'MicroDev',
          jobTitle: 'Java Developer',
          currentlyWorking: false,
          joiningDate: new Date('2018-05-01'),
          relievingDate: new Date('2024-01-31'),
          location: 'Noida',
        },
      ],
      education: [
        {
          course: 'MCA',
          specialization: 'Computer Applications',
          startDate: new Date('2012-07-01'),
          endDate: new Date('2015-06-30'),
          university: 'IGNOU',
          location: 'Delhi',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1200000 },
        expectedSalary: { amount: 1500000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/aman-gupta.pdf',
      additionalDocuments: [],
      tags: ['Backend', 'Java'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '13',
      firstName: 'Meera',
      middleName: '',
      lastName: 'Shah',
      email: 'meera.shah@example.com',
      mobile: '9876543222',
      stage: 'Sourced',
      stageId: 'sourced',
      source: 'Referral',
      sourceTags: ['Employee Referral'],
      appliedDate: new Date('2025-04-12'),
      daysInStage: 3,
      currentLocation: 'Ahmedabad',
      preferredLocation: 'Remote',
      gender: 'Female',
      dateOfBirth: new Date('1994-01-30'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Python', 'Django', 'PostgreSQL'],
      experience: [
        {
          companyName: 'TechNest',
          jobTitle: 'Python Developer',
          currentlyWorking: true,
          joiningDate: new Date('2022-08-01'),
          location: 'Ahmedabad',
        },
      ],
      education: [
        {
          course: 'B.Sc',
          specialization: 'Computer Science',
          startDate: new Date('2011-06-01'),
          endDate: new Date('2014-05-31'),
          university: 'Gujarat University',
          location: 'Ahmedabad',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 950000 },
        expectedSalary: { amount: 1200000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/meera-shah.pdf',
      additionalDocuments: [],
      tags: ['Backend', 'Python'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '14',
      firstName: 'Ravi',
      middleName: 'K.',
      lastName: 'Nair',
      email: 'ravi.nair@example.com',
      mobile: '9876543300',
      stage: 'Sourced',
      stageId: 'sourced',
      source: 'Company Website',
      sourceTags: ['Careers Page', 'Direct'],
      appliedDate: new Date('2025-04-11'),
      daysInStage: 4,
      currentLocation: 'Kochi',
      preferredLocation: 'Bangalore',
      gender: 'Male',
      dateOfBirth: new Date('1991-11-05'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Node.js', 'Express', 'MongoDB'],
      experience: [
        {
          companyName: 'Backbase Labs',
          jobTitle: 'Backend Developer',
          currentlyWorking: true,
          joiningDate: new Date('2021-06-01'),
          location: 'Kochi',
        },
      ],
      education: [
        {
          course: 'B.Tech',
          specialization: 'Information Technology',
          startDate: new Date('2009-07-01'),
          endDate: new Date('2013-06-30'),
          university: 'CUSAT',
          location: 'Kochi',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 1000000 },
        expectedSalary: { amount: 1300000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/ravi-nair.pdf',
      additionalDocuments: [],
      tags: ['Node.js', 'Backend'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
    {
      id: '15',
      firstName: 'Ayesha',
      middleName: '',
      lastName: 'Qureshi',
      email: 'ayesha.qureshi@example.com',
      mobile: '9876543555',
      stage: 'Sourced',
      stageId: 'sourced',
      source: 'AngelList',
      sourceTags: ['Startup Jobs', 'AngelList'],
      appliedDate: new Date('2025-04-10'),
      daysInStage: 5,
      currentLocation: 'Hyderabad',
      preferredLocation: 'Remote',
      gender: 'Female',
      dateOfBirth: new Date('1998-06-15'),
      candidateOwner: '660f21f5d2bc1c4c9f776abc',
      owner: '660f21f5d2bc1c4c9f776abc',
      skills: ['Vue.js', 'JavaScript', 'REST APIs'],
      experience: [
        {
          companyName: 'CodeCrate',
          jobTitle: 'Frontend Developer',
          currentlyWorking: true,
          joiningDate: new Date('2023-01-01'),
          location: 'Hyderabad',
        },
      ],
      education: [
        {
          course: 'BCA',
          specialization: 'Computer Applications',
          startDate: new Date('2017-06-01'),
          endDate: new Date('2020-05-31'),
          university: 'Osmania University',
          location: 'Hyderabad',
        },
      ],
      salaryInfo: {
        currentSalary: { amount: 750000 },
        expectedSalary: { amount: 950000 },
      },
      resumeUrl: 'https://s3.amazonaws.com/resumes/ayesha-qureshi.pdf',
      additionalDocuments: [],
      tags: ['Vue.js', 'Frontend'],
      statusHistory: [
        {
          status: 'Sourced',
          changedBy: '660f21f5d2bc1c4c9f776abc',
        },
      ],
    },
  ],

  pipelineStages: [
    { id: 'sourced', label: 'Sourced', count: 0 },
    { id: 'hr-screening', label: 'HR Screening', count: 0 },
    { id: 'mcq-assessment', label: 'MCQ Assessment', count: 1 },
    {
      id: 'technical-interview-1',
      label: '1st Round - Technical Interview',
      count: 0,
    },
    {
      id: 'technical-interview-2',
      label: '2nd Round - Final Technical Interview',
      count: 0,
    },
    { id: 'hr-interview', label: 'HR Interview', count: 0 },
    { id: 'preboarding', label: 'Preboarding', count: 0 },
    { id: 'hired', label: 'Hired', count: 0, isSuccess: true },
    { id: 'archived', label: 'Archived', count: 1, isRejected: true },
  ],

  filters: {
    sources: [
      { id: 'all', label: 'All Sources', value: 'source' },
      { id: 'naukri', label: 'Naukri', value: 'naukri' },
      { id: 'linkedin', label: 'LinkedIn', value: 'linkedin' },
      { id: 'indeed', label: 'Indeed', value: 'indeed' },
      { id: 'referral', label: 'Referral', value: 'referral' },
    ],
    experience: [
      { id: 'all', label: 'All Experience', value: 'experience' },
      { id: '0-2', label: '0-2 years', value: '0-2' },
      { id: '3-5', label: '3-5 years', value: '3-5' },
      { id: '5+', label: '5+ years', value: '5+' },
    ],
    salary: [
      { id: 'all', label: 'All Salary Ranges', value: 'salary' },
      { id: '0-5', label: '0-5 LPA', value: '0-5' },
      { id: '5-10', label: '5-10 LPA', value: '5-10' },
      { id: '10+', label: '10+ LPA', value: '10+' },
    ],
    availability: [
      { id: 'all', label: 'All Availability', value: 'availability' },
      { id: 'immediate', label: 'Immediate', value: 'immediate' },
      { id: '30', label: 'Within 30 days', value: '30' },
      { id: '60', label: 'Within 60 days', value: '60' },
    ],
    tags: [
      { id: 'all', label: 'All Tags', value: 'tags' },
      { id: 'shortlisted', label: 'Shortlisted', value: 'shortlisted' },
      { id: 'rejected', label: 'Rejected', value: 'rejected' },
      { id: 'pending', label: 'Pending Review', value: 'pending' },
    ],
  },

  departments: [
    'Engineering',
    'Human Resource',
    'Management Department',
    'Marketing',
    'Sales',
    'Finance',
    'Operations',
    'Customer Support',
  ],
  stages: [
    { id: 'sourced', label: 'Sourced', count: 0 },
    { id: 'hr-screening', label: 'HR Screening', count: 0 },
    { id: 'mcq-assessment', label: 'MCQ Assessment', count: 1 },
    {
      id: 'technical-interview-1',
      label: '1st Round - Technical Interview',
      count: 0,
    },
    {
      id: 'technical-interview-2',
      label: '2nd Round - Final Technical Interview',
      count: 0,
    },
    { id: 'hr-interview', label: 'HR Interview', count: 0 },
    { id: 'preboarding', label: 'Preboarding', count: 0 },
  ],
  locations: [
    'Baner',
    'Hinjewadi',
    'Kharadi',
    'Viman Nagar',
    'Mumbai',
    'Bangalore',
    'Delhi',
    'Remote',
  ],
}
