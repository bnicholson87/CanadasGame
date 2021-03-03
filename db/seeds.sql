USE hockey_db;

INSERT INTO team (name)
VALUES ("Leafs"), ("Canadiens"), ("Senators"), ("Canucks"), ("Flames"), ("Jets"), ("Oilers");

INSERT INTO coach (first_name, last_name, team_id)
VALUES ("Bugs", "Bunny", 1), ("Peppermint", "Patty", 2), ("Montgomery", "Burns", 3), ("Lois", "Griffin", 4), ("Natasha", "Romanov", 5), 
("Aragorn", "son of Arathorn", 6), ("Harry", "Potter", 7);

INSERT INTO player (first_name, last_name, birth_date, email, street, city, province, postal_code, friend_first_name, 
friend_last_name, position, experience_level, coach_id)
VALUES ("Mr.", "Bean", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 1), 
("Bullwinkle J.", "Moose", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 1), 
("Hermione", "Granger", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 1), 
("Happy", "Gilmore", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Beginner", 1), 
("Leia", "Organa", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Intermediate", 1), 
("Lisa", "Simpson", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Expert", 1),
("Gene", "Belcher", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 2), 
("Rosa", "Diaz", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 2),
("Leslie", "Knope", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 2), 
("Charlie", "Brown", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Intermediate", 2),
("Kermit", "the Frog", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Expert", 2), 
("Monica", "Gellar", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Beginner", 2),
("Daffy", "Duck", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 3), 
("Joey Joe Joe Jr.", "Shabadoo", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 3),
("Miss", "Piggy", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 3), 
("April", "Ludgate", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Beginner", 3),
("Luna", "Lovegood", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Expert", 3), 
("Sheldon", "Cooper", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Intermediate", 3),
("Samantha", "Stevens", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 4), 
("Rob", "Petrie", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 4),
("Arthur", "Fonzarelli", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 4),
("Mary", "Richards", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Beginner", 4),
("Jed", "Clampett", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Intermediate", 4), 
("Lucy", "Ricardo", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Expert", 4),
("Grogu", "Yoda", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 5), 
("Wanda", "Maximoff", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 5),
("Catherine", "Shaw", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 5), 
("Bill", "Hronis", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Intermediate", 5),
("Benoit", "Larocque", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Expert", 5), 
("Bronwen", "Nicholson", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Beginner", 5),
("Buzz", "Lightyear", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 6), 
("Riley", "Anderson", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 6),
("Dash", "Parr", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 6), 
("Mike", "Wazowski", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Beginner", 6),
("Dory", "Fish", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Expert", 6), 
("Bo", "Peep", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Intermediate", 6),
("Longfellow", "Deeds", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Beginner", 7), 
("Sideshow", "Bob", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Intermediate", 7),
("Patti", "Mayonnaise", "07/08/09", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Forward", "Expert", 7), 
("Spongebob", "Squrepants", "10/11/12", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Beginner", 7),
("Susie", "Charmichael", "01/02/03", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Defense", "Intermediate", 7), 
("Sabrina", "Spellman", "04/05/06", "test@test.com", "1 Bracondale Hill Rd", "Toronto", "ON", "M6G 3Z6", "null", "null", "Goalie", "Expert", 7);