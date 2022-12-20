DROP TABLE IF EXISTS host CASCADE;
DROP TABLE IF EXISTS rental CASCADE;
DROP TABLE IF EXISTS photo;
DROP TABLE IF EXISTS review;


CREATE TABLE host(
    host_id serial,
    PRIMARY KEY(host_id),
    name varchar,
    lives_in varchar,
    works text,
    about text,
    phone integer,
    email varchar,
    is_superHost boolean

);

CREATE TABLE rental(
    rental_id serial,
    PRIMARY KEY(rental_id),
    title varchar,
    location varchar,
    address varchar,
    rating_avg integer,
    review_count integer,
    bed_count integer,
    room_count integer,
    has_kitchen boolean,
    has_laundry boolean,
    has_bathroom boolean,
    has_wifi boolean,
    free_parking boolean,
    has_Ac boolean,
    has_heater boolean,
    host_id integer,
    FOREIGN KEY(host_id)
    REFERENCES host(host_id) ON DELETE CASCADE
);

CREATE TABLE photo(
    photo_id serial,
    PRIMARY KEY(photo_id),
    photo_url text ,
    rental_id integer,
    FOREIGN KEY(rental_id)
    REFERENCES rental(rental_id) ON DELETE CASCADE
);

CREATE TABLE review(
    review_id serial,
    PRIMARY KEY(review_id),
    date varchar,
    reviewer_name varchar,
    reviewer_img text,
    review text [],
    cleanliness integer,
    accuracy integer,
    communication integer,
    location integer,
    check_in integer,
    value integer,
    rental_id integer,
    FOREIGN KEY(rental_id)
    REFERENCES rental(rental_id) ON DELETE CASCADE
);