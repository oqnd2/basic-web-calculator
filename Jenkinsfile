pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // nombre que le diste en la configuración global
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Package') {
            steps {
                sh 'zip -r math-operations-app.zip .'
            }
        }
        stage('Deploy simulation') {
            steps {
                sh 'mkdir -p deploy && mv math-operations-app.zip deploy/'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully."
        }
        failure {
            echo "Pipeline failed."
        }
    }
}
