# English Language Tutoring Services Project

This project aims to provide a platform for individuals seeking to improve their English language skills. Whether to the beginner or the one aiming to enhance proficiency, this platform connects them with experienced teachers who are dedicated to supporting language learning journey.

The goal of this project is to create a user-friendly and accessible platform. Users can easily navigate the platform and they can turn to the teacher they liked the most, based on feedback about the school and the teachers. Students can also leave their feedback about the school and teachers.

## Navigation

- [General information and Intructions](#general-Information-and-intructions)
- [Page descriptions](#page-descriptions)
  - [Home](#home)
  - [Reviews](#reviews)
    - [Review (ID)](#reviewID)
  - [Teachers](#teachers)
    - [Teacher (ID)](#teacherID)
- [Usage scenarios and Flow diagram](#usage-scenarios-and-flow-diagram)

## General Information and Intructions
 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Since the project utilizes json-server, the script section in the package.json file includes the commands for starting the JSON server and commands to run both the development server and the JSON server simultaneously. Therefore, to start the project, you should use the command:

```bash
npm run all
```

**Menu items are:**

* **Home** 
* **Reviews** 
* **Teachers** 

**Additional pages are:**
* **Review ID** 
* **Teacher ID** 

## Page descriptions

### Home
* In the Home page users can explore the advantages of studying with the platform and read student reviews. Additionally, there are buttons to learn more about teachers (one leads to the Reviews page and anoter to the Teachers page).

### Reviews
* On the Reviews page, users can read and post the reviews by filling out the form in the end of the page. The form includes fields for name and surname, email, title and body of the review, the date. After submitting the form, users can see their reviews.

### Review ID
* This page dynamically displays the details of a specific review based on the review's unique identifier (id). Also there is an invitation and navigation button for users to post their own review.

### Teachers
* The Teacherst page displays brief information about different teachers along with their images, names and descriptions.

### Teacher ID
* This page dynamically displays the details of a chosen teacher based on the teacher's unique identifier (id).
It allows users learn more about their expertise, read reviews of others, post and delete their own reviews. The 'delete' option is available until the page is refreshed.**

## Usage scenarios and flow diagram
Click for [page flow diagram and scenarios](diagram-scenarios.md).