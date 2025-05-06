pipeline {
    agent any

    parameters {
        string(name: 'ChromePath', defaultValue: './../node_modules/chromedriver/lib/chromedriver/chromedriver', description: 'Path to ChromeDriver')
        string(name: 'ChromeArgs', defaultValue: '--headless;--disable-gpu;--window-size=1280,800;--no-sandbox;--disable-dev-shm-usage', description: 'Args for ChromeDriver')
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
