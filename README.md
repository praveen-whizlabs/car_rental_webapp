# car_rental_webapp



Project Documentation: Deploying a Vite App to AWS S3 with GitHub Actions
1. Introduction
This guide walks you through setting up a Vite project, deploying it to an AWS S3 bucket using AWS CLI, managing your code with GitHub, and automating deployment with GitHub Actions.

2. Prerequisites
AWS Account with IAM user that has S3 full access (Access Key ID & Secret Access Key)

GitHub Account

Git installed on your local machine

Node.js and npm installed

Basic familiarity with terminal/command line

3. Step-by-Step Procedure
Task 1: Login to GitHub & Clone/Create Repository
Login to GitHub:

Visit github.com and log in or create an account.

Create a new repository:

Click New repository from your profile page.

Enter a repository name, e.g., vite-aws-s3-deploy.

Choose Public or Private as needed.

Click Create repository.

Clone the repo locally:

bash
Copy
Edit
git clone https://github.com/yourusername/vite-aws-s3-deploy.git
cd vite-aws-s3-deploy
Task 2: Set Up Vite Project
Initialize a new Vite project inside the repo folder:

bash
Copy
Edit
npm create vite@latest .  # The dot means current folder
Choose your framework (e.g., Vanilla, React, Vue) and variant as prompted.

Install dependencies:

bash
Copy
Edit
npm install
Test the dev server:

bash
Copy
Edit
npm run dev
Build the project for production:

bash
Copy
Edit
npm run build
Task 3: Create and Configure AWS S3 Bucket
Login to AWS CLI (if not installed, follow the installation steps from earlier):

bash
Copy
Edit
aws configure
Enter your AWS Access Key ID, Secret Access Key, default region, and output format.

Create a new S3 bucket (replace your-unique-bucket-name and us-east-1):

bash
Copy
Edit
aws s3 mb s3://your-unique-bucket-name --region us-east-1
Make the bucket public (optional for static website hosting):
Use the AWS Management Console or run:

bash
Copy
Edit
aws s3 website s3://your-unique-bucket-name --index-document index.html
Set the proper bucket policy to allow public reads (for static site hosting). See AWS docs for bucket policy example.

Task 4: Upload Build Files to S3 Bucket
Upload the build folder contents to S3:

bash
Copy
Edit
aws s3 sync ./dist s3://your-unique-bucket-name --delete
Verify your site by visiting:

pgsql
Copy
Edit
http://your-unique-bucket-name.s3-website-us-east-1.amazonaws.com
Task 5: Push Code to GitHub Repository
Stage all changes:

bash
Copy
Edit
git add .
Commit changes:

bash
Copy
Edit
git commit -m "Initial Vite project setup and AWS deployment scripts"
Push to GitHub:

bash
Copy
Edit
git push origin main
Task 6: Set Up GitHub Actions for Automated Deployment
Create the folder .github/workflows in your repo root if it doesn't exist.

Create a workflow file .github/workflows/deploy.yml with the following content:

yaml
Copy
Edit
name: Deploy Vite App to AWS S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to S3
        run: aws s3 sync ./dist s3://your-unique-bucket-name --delete
Save and commit this file:

bash
Copy
Edit
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for AWS S3 deployment"
git push origin main
Add your AWS credentials to your GitHub repo’s Secrets:

Go to Settings > Secrets and variables > Actions

Add AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY

Task 7: Trigger Deployment via GitHub Actions
Push any new commit to the main branch to trigger the workflow.

Go to your GitHub repo Actions tab to monitor the workflow run.

Upon success, your updated app will be deployed automatically to the S3 bucket.

4. Additional Notes
Make sure your AWS IAM user has permission to manage S3 buckets and objects.

Keep your AWS credentials secure by using GitHub Secrets.

Modify the workflow file to match your AWS region and bucket name.

This guide assumes a simple static site deployment; customize as needed.

5. Troubleshooting
Permission denied on AWS CLI commands: Check IAM permissions.

GitHub Actions fails: Review logs under Actions tab and verify secrets.

Static site not accessible: Confirm bucket policy and website configuration on AWS.

