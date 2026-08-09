pipeline {
 agent any

stages {

    stage('Checkout') {
        steps {
            echo 'Getting source code from GitHub...'
            checkout scm
        }
    }

    stage('Build Docker Images') {
        steps {
            echo 'Building Docker images...'
            sh 'docker compose build'
        }
    }

    stage('Deploy Application') {
        steps {
            echo 'Starting OpsPulse application...'
            sh 'docker compose up -d'
        }
    }

    stage('Verify Deployment') {
        steps {
            echo 'Checking application containers...'
            sh 'docker compose ps'
        }
    }
}

post {

    success {
        echo 'OpsPulse deployment completed successfully!'
    }

    failure {
        echo 'OpsPulse deployment failed!'
        echo 'Please check the Jenkins Console Output.'
    }

    always {
        echo 'Pipeline execution completed.'
    }
}

}
