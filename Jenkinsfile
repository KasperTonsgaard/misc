pipeline {
    agent any

    parameters {
        string(name: 'ChromePath', defaultValue: 'default1', description: 'Path to ChromeDriver')
        string(name: 'ChromeArgs', defaultValue: 'default2', description: 'Args for ChromeDriver')
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
                        chrome_path: params.ChromePath,
                        chrome_args: params.ChromeArgs
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
