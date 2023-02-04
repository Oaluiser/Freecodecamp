--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying(20) NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (68, 2018, 'Final', 542, 544, 4, 2);
INSERT INTO public.games VALUES (69, 2018, 'Third Place', 543, 546, 2, 0);
INSERT INTO public.games VALUES (70, 2018, 'Semi-Final', 544, 546, 2, 1);
INSERT INTO public.games VALUES (71, 2018, 'Semi-Final', 542, 543, 1, 0);
INSERT INTO public.games VALUES (72, 2018, 'Quarter-Final', 544, 545, 3, 2);
INSERT INTO public.games VALUES (73, 2018, 'Quarter-Final', 546, 550, 2, 0);
INSERT INTO public.games VALUES (74, 2018, 'Quarter-Final', 543, 547, 2, 1);
INSERT INTO public.games VALUES (75, 2018, 'Quarter-Final', 542, 548, 2, 0);
INSERT INTO public.games VALUES (76, 2018, 'Eighth-Final', 546, 549, 2, 1);
INSERT INTO public.games VALUES (77, 2018, 'Eighth-Final', 550, 564, 1, 0);
INSERT INTO public.games VALUES (78, 2018, 'Eighth-Final', 543, 551, 3, 2);
INSERT INTO public.games VALUES (79, 2018, 'Eighth-Final', 547, 552, 2, 0);
INSERT INTO public.games VALUES (80, 2018, 'Eighth-Final', 544, 553, 2, 1);
INSERT INTO public.games VALUES (81, 2018, 'Eighth-Final', 545, 554, 2, 1);
INSERT INTO public.games VALUES (82, 2018, 'Eighth-Final', 548, 555, 2, 1);
INSERT INTO public.games VALUES (83, 2018, 'Eighth-Final', 542, 556, 4, 3);
INSERT INTO public.games VALUES (84, 2014, 'Final', 557, 556, 1, 0);
INSERT INTO public.games VALUES (85, 2014, 'Third Place', 558, 547, 3, 0);
INSERT INTO public.games VALUES (86, 2014, 'Semi-Final', 556, 558, 1, 0);
INSERT INTO public.games VALUES (87, 2014, 'Semi-Final', 557, 547, 7, 1);
INSERT INTO public.games VALUES (88, 2014, 'Quarter-Final', 558, 559, 1, 0);
INSERT INTO public.games VALUES (89, 2014, 'Quarter-Final', 556, 543, 1, 0);
INSERT INTO public.games VALUES (90, 2014, 'Quarter-Final', 547, 549, 2, 1);
INSERT INTO public.games VALUES (91, 2014, 'Quarter-Final', 557, 542, 1, 0);
INSERT INTO public.games VALUES (92, 2014, 'Eighth-Final', 547, 560, 2, 1);
INSERT INTO public.games VALUES (93, 2014, 'Eighth-Final', 549, 548, 2, 0);
INSERT INTO public.games VALUES (94, 2014, 'Eighth-Final', 542, 561, 2, 0);
INSERT INTO public.games VALUES (95, 2014, 'Eighth-Final', 557, 562, 2, 1);
INSERT INTO public.games VALUES (96, 2014, 'Eighth-Final', 558, 552, 2, 1);
INSERT INTO public.games VALUES (97, 2014, 'Eighth-Final', 559, 563, 2, 1);
INSERT INTO public.games VALUES (98, 2014, 'Eighth-Final', 556, 564, 1, 0);
INSERT INTO public.games VALUES (99, 2014, 'Eighth-Final', 543, 565, 2, 1);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (542, 'France');
INSERT INTO public.teams VALUES (543, 'Belgium');
INSERT INTO public.teams VALUES (544, 'Croatia');
INSERT INTO public.teams VALUES (545, 'Russia');
INSERT INTO public.teams VALUES (546, 'England');
INSERT INTO public.teams VALUES (547, 'Brazil');
INSERT INTO public.teams VALUES (548, 'Uruguay');
INSERT INTO public.teams VALUES (549, 'Colombia');
INSERT INTO public.teams VALUES (550, 'Sweden');
INSERT INTO public.teams VALUES (551, 'Japan');
INSERT INTO public.teams VALUES (552, 'Mexico');
INSERT INTO public.teams VALUES (553, 'Denmark');
INSERT INTO public.teams VALUES (554, 'Spain');
INSERT INTO public.teams VALUES (555, 'Portugal');
INSERT INTO public.teams VALUES (556, 'Argentina');
INSERT INTO public.teams VALUES (557, 'Germany');
INSERT INTO public.teams VALUES (558, 'Netherlands');
INSERT INTO public.teams VALUES (559, 'Costa Rica');
INSERT INTO public.teams VALUES (560, 'Chile');
INSERT INTO public.teams VALUES (561, 'Nigeria');
INSERT INTO public.teams VALUES (562, 'Algeria');
INSERT INTO public.teams VALUES (563, 'Greece');
INSERT INTO public.teams VALUES (564, 'Switzerland');
INSERT INTO public.teams VALUES (565, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 99, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 565, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games fk_games_teams; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_games_teams FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- Name: games fk_games_teams_opponent; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_games_teams_opponent FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

