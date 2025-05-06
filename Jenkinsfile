pipeline {
    agent any

    parameters {
        string(name: 'ARG1', defaultValue: 'default1', description: 'First argument')
        string(name: 'ARG2', defaultValue: 'default2', description: 'Second argument')
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Project') {
            steps {
                echo "Running Node.js project with ARG1=${params.ARG1} and ARG2=${params.ARG2}"
                sh "node index.js ${params.ARG1} ${params.ARG2}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
