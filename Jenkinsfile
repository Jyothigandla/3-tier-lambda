pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Jyothigandla/3-tier-lambda.git'
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t frontend ./frontend'
                sh 'docker build -t backend ./backend'
            }
        }
    }
}
