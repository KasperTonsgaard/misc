pipeline {
    agent any

    parameters {
        string(name: 'ChromePath', defaultValue: 'default1', description: 'Path to ChromeDriver')
        string(name: 'ChromeArgs', defaultValue: 'default2', description: 'Second argument')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Write Config') {
            steps {
                script {
                    def config = [
                        chrome_path: params.ARG1,
                        chrome_args: params.ARG2
                    ]
                    writeFile file: 'config.json', text: groovy.json.JsonOutput.toJson(config)
                }
            }
        }

        stage('Run Project') {
            steps {
                sh "npm run test"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
