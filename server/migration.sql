DROP TABLE IF EXISTS host, rental CASCADE;
DROP TABLE IF EXISTS photo;
DROP TABLE IF EXISTS review;


CREATE TABLE host(
    host_id serial,
    PRIMARY KEY(host_id),
    name varchar,
    about text,
    during_your_stay text
);

CREATE TABLE rental(
    rental_id serial,
    PRIMARY KEY(rental_id),
    title varchar,
    location varchar,
    rating_avg varchar,
    review_count varchar,
    max_guests varchar,
    room_count varchar,
    bed_count varchar,
    bathroom_count varchar,
    cost_per_night integer,
    rental_desc text,
    location_mini_desc text,
    check_in_time varchar,
    check_out_time varchar,
    host_id integer,
    FOREIGN KEY(host_id)
    REFERENCES host(host_id) ON DELETE CASCADE
);

CREATE TABLE photo(
    photo_id serial,
    PRIMARY KEY(photo_id),
    photo_url text,
    rental_id integer,
    FOREIGN KEY(rental_id)
    REFERENCES rental(rental_id) ON DELETE CASCADE
);

CREATE TABLE review(
    review_id serial,
    PRIMARY KEY(review_id),
    reviewer_name varchar,
    reviewer_img text,
    review_date varchar,
    review_text text,
    rental_id integer,
    FOREIGN KEY(rental_id)
    REFERENCES rental(rental_id) ON DELETE CASCADE
);