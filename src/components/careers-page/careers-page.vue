<template>
  <div class="careers-page-wrapper">
    <div class="container">
      <div class="row">
        <div class="offset-lg-1 col-lg-5">
          <h4 class="mt-5">Why are we hiring?</h4>
          <p class="p-space">Reason is pretty simple - we are delivering great results for amazing products using amazing tech, and we want to do more of that. On the other side, we love to meet and spend our days with people who share the same passion for digital products as we do. People who love to challenge the status quo, share knowledge and ideas, and push the limits of tech and design. </p>
        </div>
        <div class="col-lg-5">
          <h4 class="mt-5">About Kroon</h4>
          <p class="p-space">We are a Swiss / Serbian company, with offices in Zurich and Belgrade. Kroon is truly an international team and place where we speak several languages (English, Greek, Serbian, German and Spanish). Kroon is a product of pure passion for product design and great software. We are a team that offers end-to-end solutions when it comes to building mobile and web apps. </p>
        </div>
        <div class="offset-lg-1 col-lg-5">
          <h4 class="mt-5">Inside Kroon</h4>
          <p class="p-space">Being here means having the opportunity to thrive, learn and develop yourself personally and professionally. If you choose Kroon (and vice-versa) you will find constructive criticism, problem solving and solutions oriented attitudes. And this we, really mean it! We like to challenges solutions, ideas and keep refining them so that we all benefit from better self and better team.  </p>
        </div>
      </div>
      <div class="row margin-fix">
        <div class="offset-lg-1 col-lg-3 col-md-3 col-sm-4 hide-xs">
          <ul class="nav">
            <li @click="showJobInfo(0)" :class="{'active': jobToShow === openPositions[0]}">Account Manager</li>
            <!-- <li @click="showJobInfo(0)" :class="{'active': jobToShow === openPositions[0]}">Senior PHP Developer <br />(Symfony/Fintech)</li>
            <li @click="showJobInfo(1)" :class="{'active': jobToShow === openPositions[1]}">Senior PHP Developer</li>
            <li @click="showJobInfo(2)" :class="{'active': jobToShow === openPositions[2]}">Frontend Developer</li>
            <li @click="showJobInfo(3)" :class="{'active': jobToShow === openPositions[3]}">UI / UX Designer</li>
            <li @click="showJobInfo(4)" :class="{'active': jobToShow === openPositions[4]}">Python Developer</li> -->
          </ul>
        </div>
        <div class="col-12 show-xs">
          <h2>Choose position</h2>
          <select v-model="jobSelect" @change="handleJobChange" class="custom-select">
             <option selected disabled :value="-1">Select position</option>
             <option :value="0">Senior PHP Developer (Symfony/Fintech)</option>
             <option :value="1">Senior PHP Developer</option>
             <option :value="2">Frontend Developer</option>
             <option :value="3">UI / UX Designer</option>
             <option :value="4">Python Developer</option>
          </select>
        </div>
        <job-info :job-data="jobToShow" />
      </div>
    </div>
  </div>
</template>

<script>
import JobInfo from './components/job-info.component'
export default {
  name: 'careers-page',
  components: {
    JobInfo
  },
  methods: {
    showJobInfo (index) {
      this.jobToShow = this.openPositions[index]
      this.jobSelect = index
    },
    handleJobChange () {
      this.jobToShow = this.openPositions[this.jobSelect]
    }
  },
  created () {
    this.jobToShow = this.openPositions[0]
    this.jobSelect = -1
  },
  // computed: {
  //   showJob () {
  //     return (this.jobSelect !== -1  this.jobToShow !== this.openPositions[0])
  //   }
  // },
  data () {
    return {
      jobToShow: null,
      jobSelect: null,
      openPositions: [
        {
          title: 'Account Manager',
          description: 'We are looking for a USA based Account Manager to create and maintain continuous and trusting relationships with our clients, to identify new business opportunities among existing portfolio of customers, and to actively seek new sales opportunities.',
          inChargeOf: [
            'Serve as the lead point of contact for all customer account management matters',
            'Build and maintain strong, long-lasting client relationships',
            'Negotiate contracts and close agreements',
            'Develop trusted advisor relationships with key accounts, customer stakeholders and executive sponsors',
            'Clearly communicate the progress of monthly/quarterly initiatives to internal stakeholders',
            'Develop new business with existing clients and/or identify areas of improvement and opportunities'
          ],
          skills: [
            'Proven work experience as an Account Manager, Key Account Manager, Sales Account Manager, Junior Account Manager or relevant role',
            'Deep understanding of information technologies and evolution of digital concepts',
            'Demonstrable ability to communicate, present and influence key stakeholders at all levels of an organization',
            'Experience with CRM software (e.g. Salesforce, Zoho CRM or HubSpot)',
            'Excellent listening, negotiation and presentation abilities',
            'Strong verbal and written communication skills'
          ],
          apply: 'If you think you would be a good fit for this role, send your resume at contact@kroonstudio.com and we will get in touch with you.'
        },
        // {
        //   title: 'Python Developer',
        //   description: 'We are looking for a Senior Python Web Developer to join our backend team. You will work in a large data integration project and you will be responsible for managing the interchange of data between the server, the frontend users and otherthird-party APIs. Your primary focus will be the development of all server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application; therefore, a basic understanding of front-end technologies is necessary as well.',
        //   inChargeOf: [
        //     'Fluent in English',
        //     'Expert in Python, with knowledge of at least one Python web framework',
        //     'At least three years experience as a Professional developer',
        //     'Ability to read and understand logs and stack traces',
        //     'Ability to research using internal knowledge bases and public facing documentation (Google Cloud Platform Documentation, Stack Overflow)'
        //   ],
        //   skills: [
        //     'Familiarity with some ORM (Object Relational Mapper) libraries',
        //     'Able to integrate multiple data sources and databases into one system',
        //     'Understanding of the threading limitations of Python, and multi-process architecture',
        //     'Basic understanding of front-end technologies, such as JavaScript and HTML5',
        //     'Understanding of accessibility and security compliance',
        //     'Knowledge of user authentication and authorization between multiple systems, servers, and environments',
        //     'Understanding of fundamental design principles behind a scalable application',
        //     'Familiarity with event-driven programming in Python',
        //     'Able to create database schemas that represent and support business processes',
        //     'Strong unit test and debugging skills',
        //     'Proficient understanding of code versioning tools'
        //   ],
        //   apply: 'Please send your resume to contact@kroonstudio.com with subject line Python. Would be nice that your CV contains links to project you\'ve worked on, with descriptions of your responsibilities.'
        // },
        // {
        //   title: 'Senior PHP Developer (Symfony/Fintech)',
        //   description: 'We are looking for a LAMP and PHP developer that knows Symfony/Laravel frameworks and is used to creating great products. We are a Swiss/Serbian company that provides a full service from design to development of customers demands in the Web/App Space. We have interesting development projects in a variety of industries from startups to fully established corporations. We are looking for a developer that is willing to go the next step with our team of highly motivated developers to create most astonishing products.',
        //   inChargeOf: [
        //     'Solve complex business problems with technical solutions',
        //     'Contribute to innovation and improvements on projects',
        //     'Deliver quality software by participating in the full software lifecycle from Design to Deployment to Sustainment',
        //     'Collaborate with other team members and customers',
        //     'Deliver state of the art code'
        //   ],
        //   skills: [
        //     '3+ years of experience developing LAMP and PHP',
        //     'Experience with Docker and nginx a plus',
        //     'Experience with Object Oriented Programming principles',
        //     'Experience with Symfony',
        //     'Demonstrated experience with web services and application integration with external systems',
        //     'Working knowledge of JavaScript frameworks (React, Vue, etc) a big plus',
        //     'Expertise in data structures, algorithms, and complexity analysis a plus',
        //     'SQL experience a must, MySQL',
        //     'HTML and current CSS styling',
        //     'Good knowledge in GIT source code management tools',
        //     'Ability to read and comprehend technical specifications',
        //     'Strong conceptualization and visual communication abilities',
        //     'Exceptional attention to detail',
        //     'Good spoken and written english',
        //     'Know-how in Fintech, Financial space very welcomed'
        //   ],
        //   apply: 'Please send your resume to contact@kroonstudio.com with subject line PHP. Would be nice that your CV contains links to project you\'ve worked on, with descriptions of your responsibilities.'
        // },
        // {
        //   title: 'Senior PHP Developer',
        //   description: 'We are looking for a LAMP and PHP developer that knows Symfony/Laravel frameworks and is used to creating great products. We are a Swiss/Serbian company that provides a full service from design to development of customers demands in the Web/App Space. We have interesting development projects in a variety of industries from startups to fully established corporations. We are looking for a developer that is willing to go the next step with our team of highly motivated developers to create most astonishing products.',
        //   inChargeOf: [
        //     'Solve complex business problems with technical solutions',
        //     'Contribute to innovation and improvements on projects',
        //     'Deliver quality software by participating in the full software lifecycle from Design to Deployment to Sustainment',
        //     'Collaborate with other team members and customers',
        //     'Deliver state of the art code'
        //   ],
        //   skills: [
        //     '3+ years of experience developing LAMP and PHP',
        //     'Experience with Docker and nginx a plus',
        //     'Experience with Object Oriented Programming principles',
        //     'Experience with Symfony',
        //     'Demonstrated experience with web services and application integration with external systems',
        //     'Working knowledge of JavaScript frameworks (React, Vue, etc) a big plus',
        //     'Expertise in data structures, algorithms, and complexity analysis a plus',
        //     'SQL experience a must, MySQL',
        //     'HTML and current CSS styling',
        //     'Good knowledge in GIT source code management tools',
        //     'Ability to read and comprehend technical specifications',
        //     'Strong conceptualization and visual communication abilities',
        //     'Exceptional attention to detail',
        //     'Good spoken and written english'
        //   ],
        //   apply: 'Please send your resume to contact@kroonstudio.com with subject line PHP. Would be nice that your CV contains links to project you\'ve worked on, with descriptions of your responsibilities.'
        // },
        // {
        //   title: 'Frontend Developer',
        //   description: 'Frontend dev is one of the key positions here at Kroon, and the one we give a lot of attention. Given the fact that we provide design and development services, Frontend Developer is person that combines the two and makes sure, that art and technology come together in perfect harmony.',
        //   inChargeOf: [
        //     'Develop new user-facing features',
        //     'Build reusable code and libraries for future use',
        //     'Ensure the technical feasibility of UI/UX designs',
        //     'Optimize application for maximum speed and scalability',
        //     'Assure that all user input is validated before submitting to back-end',
        //     'Collaborate with other team members and stakeholders'
        //   ],
        //   skills: [
        //     '2+ years of experience',
        //     'Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS',
        //     'Good understanding of Vue / Angular / React',
        //     'Proficient understanding of cross-browser compatibility issues and ways to work around them'
        //   ],
        //   apply: 'Please send your resume to contact@kroonstudio.com with subject line Frontend. Would be nice that your CV contains links to project you\'ve worked on, with descriptions of your responsibilities.'
        // },
        // {
        //   title: 'UX / UI Designer',
        //   description: 'A UX designer in our team is considered a person who understand how users feel when interacting with a product. UX designer can understand complex system architecture, logic and user stories and translate them into visual diagrams. UI designer is a person who understands all things visual, and in collaboration with UX designer creates stunning visual experiences. We are looking for both, or a person with a mix of experience.',
        //   inChargeOf: [
        //     'Translate concepts into wireframes and mockups that lead to intuitive user experiences',
        //     'Facilitate client’s product visions by researching, conceiving, wireframing, sketching, prototyping, and mocking up user experiences for digital products',
        //     'Design and deliver wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces',
        //     'Take a user-centered design approach and rapidly test and iterate your designs',
        //     'Take smart risks and champion new ideas'
        //   ],
        //   skills: [
        //     'Three or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions for complete digital environments',
        //     'Ability to work with clients to understand detailed requirements and design complete user experiences that meet client needs and vision',
        //     'Extensive experience in using UX design best practices to design solutions, and a deep understanding of mobile-first and responsive design',
        //     'Ability to iterate your designs and solutions efficiently and intelligently',
        //     'Be willing to help teammates, share knowledge and experience with them, and learn from them',
        //     'Be open to receiving feedback and constructive criticism'
        //   ],
        //   apply: 'Please send your resume to contact@kroonstudio.com with subject line UX UI. Would be nice that your CV contains links to project you\'ve worked on, with descriptions of your responsibilities.'
        // },
        // {
        //   title: 'Python developer',
        //   description: 'We are looking for a Python Web Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application; therefore, a basic understanding of front-end technologies is necessary as well.',
        //   skills: [
        //     'Expert in Python, with knowledge of at least one Python web framework',
        //     'Familiarity with some ORM (Object Relational Mapper) libraries',
        //     'Able to integrate multiple data sources and databases into one system',
        //     'Understanding of the threading limitations of Python, and multi-process architecture',
        //     'Good understanding of server-side templating languages',
        //     'Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3',
        //     'Understanding of accessibility and security compliance',
        //     'Knowledge of user authentication and authorization between multiple systems, servers, and environments',
        //     'Understanding of fundamental design principles behind a scalable application',
        //     'Familiarity with event-driven programming in Python',
        //     'Understanding of the differences between multiple delivery platforms, such as mobile vs desktop, and optimizing output to match the specific platform',
        //     'Able to create database schemas that represent and support business processes',
        //     'Strong unit test and debugging skills',
        //     'Proficient understanding of code versioning tools'
        //   ],
        //   apply: 'Please send your resume to contact@kroonstudio.com with subject line Python. Would be nice that your CV contains links to project you\'ve worked on, with descriptions of your responsibilities.'
        // }
      ]
    }
  }
}
</script>
