pipeline {
  agent any
  stages {
    stage('upload to nexus') {
      steps {
        script {
          pom = readMavenPom file: "pom.xml";

          filesbyGlob = findFiles(glob: "target/*.jar");

          nexusArtifactUploader(artifacts: [[artifactId: pom.artifactId, classifier: '', file: filesbyGlob[0].path, type: 'jar']], credentialsId: 'nexus', groupId: pom.groupId, nexusUrl: 'localhost:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'com.testnjc', version: pom.version)
        }

      }
    }

  }
  tools {
    maven 'Maven'
  }
}
