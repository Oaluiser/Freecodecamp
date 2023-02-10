#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=guessing -t --no-align -c"
#generate random number 1-1000
SECRET_NUMBER=$(( RANDOM % 1000 + 1 ))
echo "the secret number is: $SECRET_NUMBER"

echo "Enter your username:"
read USERNAME

CHECK_USERNAME=$($PSQL "SELECT * FROM guessing WHERE name = '$USERNAME'")
NUMBER_OF_GUESSES=1

if [[ -z $CHECK_USERNAME ]]
  then
    echo "Welcome, $USERNAME! It looks like this is your first time here."
  else
    BEST_GAME=$($PSQL "SELECT MIN(number_of_guesses) FROM guessing WHERE name = '$USERNAME'")
    GAMES_PLAYED=$($PSQL "SELECT COUNT(name) FROM guessing WHERE name = '$USERNAME'")
    echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

echo "Guess the secret number between 1 and 1000:"

GUESSER () {
  read GUESS

  if ! [[ $GUESS =~ ^[0-9]+$ ]]
    then
      echo "That is not an integer, guess again:"
      GUESSER
    else
      if [[ $GUESS < $SECRET_NUMBER ]]
        then
          echo "It's higher than that, guess again:"
          ((NUMBER_OF_GUESSES++))
          GUESSER
      elif [[ $GUESS > $SECRET_NUMBER ]]
        then
          echo "It's lower than that, guess again:"
          ((NUMBER_OF_GUESSES++))
          GUESSER
      else
        INSERT_GAME=$($PSQL "INSERT INTO guessing(name, number_of_guesses, secret_number) VALUES('$USERNAME', $NUMBER_OF_GUESSES, $SECRET_NUMBER)")
        echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
      fi
  fi
}

GUESSER