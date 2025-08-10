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
                    bat 'start /B cmd /C "node index.js > output.log 2>&1"'
                    
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
            emailext(
                subject: "✅ Deploy exitoso - Math Operations",
                body: """<p>Hola!.</p>
                         <p>El pipeline <b>${env.JOB_NAME}</b> (#${env.BUILD_NUMBER}) se ejecutó correctamente.</p>
                         <p>Revisa la aplicación para confirmar que todo funciona bien.</p>""",
                mimeType: 'text/html'
            )
        }
        failure {
            echo "Pipeline failed."
            emailext(
                subject: "❌ Deploy fallido - Math Operations",
                body: """<p>Hola Felipe,</p>
                         <p>El pipeline <b>${env.JOB_NAME}</b> (#${env.BUILD_NUMBER}) falló.</p>
                         <p>Revisa los logs en Jenkins para encontrar la causa.</p>""",
                mimeType: 'text/html'
            )
        }
    }
}
