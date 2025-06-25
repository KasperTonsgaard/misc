pipeline {
    agent any

    parameters {
        string(name: 'ChromePath', defaultValue: './node_modules/chromedriver/lib/chromedriver/chromedriver', description: 'Path to ChromeDriver')
        string(name: 'ChromeArgs', defaultValue: '--headless;--disable-gpu;--window-size=1280,800;--no-sandbox;--disable-dev-shm-usage', description: 'Args for ChromeDriver')
        string(name: 'history', defaultValue: 'true', description: 'allow history')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'rm -rf allure-results allure-report'
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
                sh "npm run mocha"
            }
        }
    }

    post {
        always {
            allure includeProperties: false, history: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}
