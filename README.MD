# Calorie Cruncher

A React/Redux based web application for tracking your daily calories in and out to help you in your goals, be it gain or loss. The app has an associated Rails based API backend for storing users and daily information.

## Installation
To install the program, run the following:

```bash
git clone git@github.com:kjoos22/calorie_cruncher_v2.git
```
## Configuring database
To configure the database, navigate to the backend directory and run the following:

```bash
rails db:migrate
```

Limited seed data is provided, to implement run the following:

```bash
rails db:seed
```

## Launching the program
Once installed, navigate to the backend directory and launch the backend via:

```bash
rails s -p 3001
```

Navigate back to frontend directory and launch the frontend via:

```bash
npm start
```

This will then open the application in your default web browser.

## Contributing
Pull requests are welcome. To propose substantial changes please open an issue.

## Future Features
1. Improved styling.
2. Ability to edit a day record.
3. Expand "calories expended" tracking to be more robust. Track specific exercises and their duration to ultimately calculate calories expended (backend functionality for this feature is mostly complete, no frontend functionality exists yet).
4. Expand "calories consuumed" tracking to be more robust. Track specific foods and their quantities to ultimately calculate calories consumed.
5. Expand breakdown of daily nutrition to be more than just calories. Add ability to track macronutrients, and set goals for macronutrients and compare actuals vs goals.
6. Add weekly, monthly, yearly summaries and advanced analytics.

## License
https://github.com/kjoos22/calorie_cruncher_v2/blob/main/LICENSE.txt

