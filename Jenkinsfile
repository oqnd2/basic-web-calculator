pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Package') {
            steps {
                bat 'powershell -Command "Compress-Archive -Path * -DestinationPath math-operations-app.zip"'
            }
        }
        stage('Deploy simulation') {
            steps {
                bat '''
                if not exist deploy mkdir deploy
                move math-operations-app.zip deploy\\
                '''
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
