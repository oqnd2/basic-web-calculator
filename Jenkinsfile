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
        stage('Start app for 60 seconds') {
            steps {
                script {
                    // Arrancar la app en segundo plano
                    bat 'start /B cmd /C "npm start > output.log 2>&1"'
                    
                    echo "Aplicación iniciada. Esperando 60 segundos..."
                    sleep(time: 60, unit: "SECONDS")
                    
                    // Matar el proceso de Node
                    bat 'taskkill /F /IM node.exe || exit 0'
                }
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
