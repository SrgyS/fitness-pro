# SkyProFitness Application
This is a fitness application that allows users to access online training courses.

## Features
Course catalog page - lists all available courses fetched from a database  
Course overview page - provides details about a specific course  
User authorization - user can register, login and edit their profile  
User profile page - shows purchased courses and progress  
Course content pages - displays videos and tasks for a course's lessons  
Progress tracking - user can log completed tasks and app calculates progress percentage  
## Tech stack
React  
Typescript  
Redux  
Google Fairebase  
REST API  
React Router for navigation  
Styled components for styling  
## Running the project
Clone the repository  
Run npm install to install dependencies  
Run npm run dev to start development server  
Open http://localhost:3000 to view the app  
### Contributing
Pull requests are welcome! Feel free to open an issue or submit a PR if you found a bug or want to propose a new feature.  


import * as S from './Progress.styled'


type Props = {}

const TrainProgress = (props: Props) => {
  return (
    <S.ProgressPageContainer>
    <S.ProgressFormBox>
      <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
      <S.Inputs>
        <S.Description>Сколько раз вы сделали наклоны вперед?</S.Description>
        <S.ExerciseInput name="forward bends">
        <S.Description>Сколько раз вы сделали наклоны назад?</S.Description>
        <S.ExerciseInput name="bends back">
        <S.Description>Сколько раз вы сделали поднятие ног, согнутых в коленях?</S.Description>
        <S.ExerciseInput name="leg raising">
      </S.Inputs>
      <S.SendButton type="submit">Отправить</S.SendButton>
    </S.ProgressFormBox>
  </S.ProgressPageContainer>
)
  
}

export default TrainProgress
