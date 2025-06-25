pipeline {
    agent any

    parameters {
        booleanParam(name: 'HISTORY', defaultValue: true, description: 'allow history')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'rm -rf allure-results allure-report'
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Project') {
            steps {
                sh "npm run mocha"
            }
        }
    }

    post {
        always {
            allure includeProperties: false, history: params.HISTORY, jdk: '', results: [[path: 'allure-results']]
        }
    }
}
