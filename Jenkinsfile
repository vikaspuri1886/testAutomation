pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        sh '''pipeline {
  agent any
  stages {
    stage(\'start\') {
      steps {
        echo \'Start Pipeline\'
      }
    }
    
    stage (\'Build\'){
 		steps {
 			withMaven(maven:\'maven\'){
 				sh \'mvn -f pom.xml clean install\'
 			}
 		}
 	}

  }
tools {maven \'M2_HOME\'}
}'''
        }
      }

    }
  }