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

DROP DATABASE guessing;
--
-- Name: guessing; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE guessing WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE guessing OWNER TO freecodecamp;

\connect guessing

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
-- Name: guessing; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.guessing (
    name character varying(22) NOT NULL,
    number_of_guesses integer NOT NULL,
    secret_number integer NOT NULL
);


ALTER TABLE public.guessing OWNER TO freecodecamp;

--
-- Data for Name: guessing; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.guessing VALUES ('Alu', 14, 619);
INSERT INTO public.guessing VALUES ('user_1675987560434', 824, 823);
INSERT INTO public.guessing VALUES ('user_1675987560433', 287, 286);
INSERT INTO public.guessing VALUES ('user_1675987744453', 653, 652);
INSERT INTO public.guessing VALUES ('user_1675987744453', 710, 709);
INSERT INTO public.guessing VALUES ('user_1675987744452', 294, 293);
INSERT INTO public.guessing VALUES ('user_1675987744452', 431, 430);
INSERT INTO public.guessing VALUES ('user_1675987744453', 781, 778);
INSERT INTO public.guessing VALUES ('user_1675987744453', 62, 61);
INSERT INTO public.guessing VALUES ('user_1675987744453', 81, 80);
INSERT INTO public.guessing VALUES ('user_1675987782860', 578, 577);
INSERT INTO public.guessing VALUES ('user_1675987782860', 730, 729);
INSERT INTO public.guessing VALUES ('user_1675987782859', 899, 898);
INSERT INTO public.guessing VALUES ('user_1675987782859', 376, 375);
INSERT INTO public.guessing VALUES ('user_1675987782860', 436, 433);
INSERT INTO public.guessing VALUES ('user_1675987782860', 935, 934);
INSERT INTO public.guessing VALUES ('user_1675987782860', 436, 435);
INSERT INTO public.guessing VALUES ('user_1675987798743', 308, 307);
INSERT INTO public.guessing VALUES ('user_1675987798743', 415, 414);
INSERT INTO public.guessing VALUES ('user_1675987798742', 278, 277);
INSERT INTO public.guessing VALUES ('user_1675987798742', 13, 12);
INSERT INTO public.guessing VALUES ('user_1675987798743', 498, 495);
INSERT INTO public.guessing VALUES ('user_1675987798743', 183, 182);
INSERT INTO public.guessing VALUES ('user_1675987798743', 587, 586);
INSERT INTO public.guessing VALUES ('Alu', 3, 720);
INSERT INTO public.guessing VALUES ('user_1675987844204', 296, 295);
INSERT INTO public.guessing VALUES ('user_1675987844204', 647, 646);
INSERT INTO public.guessing VALUES ('user_1675987844203', 47, 46);
INSERT INTO public.guessing VALUES ('user_1675987844203', 278, 277);
INSERT INTO public.guessing VALUES ('user_1675987844204', 179, 176);
INSERT INTO public.guessing VALUES ('user_1675987844204', 127, 126);
INSERT INTO public.guessing VALUES ('user_1675987844204', 204, 203);
INSERT INTO public.guessing VALUES ('alaall', 1, 31);
INSERT INTO public.guessing VALUES ('user_1675987905327', 656, 655);
INSERT INTO public.guessing VALUES ('user_1675987905327', 183, 182);
INSERT INTO public.guessing VALUES ('user_1675987905326', 741, 740);
INSERT INTO public.guessing VALUES ('user_1675987905326', 651, 650);
INSERT INTO public.guessing VALUES ('user_1675987905327', 816, 813);
INSERT INTO public.guessing VALUES ('user_1675987905327', 710, 709);
INSERT INTO public.guessing VALUES ('user_1675987905327', 184, 183);
INSERT INTO public.guessing VALUES ('user_1675988704341', 847, 846);
INSERT INTO public.guessing VALUES ('user_1675988704341', 498, 497);
INSERT INTO public.guessing VALUES ('user_1675988704340', 266, 265);
INSERT INTO public.guessing VALUES ('user_1675988704340', 518, 517);
INSERT INTO public.guessing VALUES ('user_1675988704341', 704, 701);
INSERT INTO public.guessing VALUES ('user_1675988704341', 380, 379);
INSERT INTO public.guessing VALUES ('user_1675988704341', 258, 257);
INSERT INTO public.guessing VALUES ('user_1675988816344', 498, 497);
INSERT INTO public.guessing VALUES ('user_1675988816344', 158, 157);
INSERT INTO public.guessing VALUES ('user_1675988816343', 845, 844);
INSERT INTO public.guessing VALUES ('user_1675988816343', 705, 704);
INSERT INTO public.guessing VALUES ('user_1675988816344', 96, 93);
INSERT INTO public.guessing VALUES ('user_1675988816344', 624, 623);
INSERT INTO public.guessing VALUES ('user_1675988816344', 942, 941);
INSERT INTO public.guessing VALUES ('user_1675988899566', 315, 314);
INSERT INTO public.guessing VALUES ('user_1675988899566', 680, 679);
INSERT INTO public.guessing VALUES ('user_1675988899565', 434, 433);
INSERT INTO public.guessing VALUES ('user_1675988899565', 934, 933);
INSERT INTO public.guessing VALUES ('user_1675988899566', 568, 565);
INSERT INTO public.guessing VALUES ('user_1675988899566', 980, 979);
INSERT INTO public.guessing VALUES ('user_1675988899566', 602, 601);
INSERT INTO public.guessing VALUES ('user_1675988932630', 475, 474);
INSERT INTO public.guessing VALUES ('user_1675988932630', 560, 559);
INSERT INTO public.guessing VALUES ('user_1675988932629', 224, 223);
INSERT INTO public.guessing VALUES ('user_1675988932629', 307, 306);
INSERT INTO public.guessing VALUES ('user_1675988932630', 576, 573);
INSERT INTO public.guessing VALUES ('user_1675988932630', 465, 464);
INSERT INTO public.guessing VALUES ('user_1675988932630', 153, 152);
INSERT INTO public.guessing VALUES ('user_1675989006398', 969, 968);
INSERT INTO public.guessing VALUES ('user_1675989006398', 974, 973);
INSERT INTO public.guessing VALUES ('user_1675989006397', 650, 649);
INSERT INTO public.guessing VALUES ('user_1675989006397', 93, 92);
INSERT INTO public.guessing VALUES ('user_1675989006398', 667, 664);
INSERT INTO public.guessing VALUES ('user_1675989006398', 409, 408);
INSERT INTO public.guessing VALUES ('user_1675989006398', 11, 10);
INSERT INTO public.guessing VALUES ('user_1675989023426', 52, 51);
INSERT INTO public.guessing VALUES ('user_1675989023426', 123, 122);
INSERT INTO public.guessing VALUES ('user_1675989023425', 205, 204);
INSERT INTO public.guessing VALUES ('user_1675989023425', 344, 343);
INSERT INTO public.guessing VALUES ('user_1675989023426', 763, 760);
INSERT INTO public.guessing VALUES ('user_1675989023426', 872, 871);
INSERT INTO public.guessing VALUES ('user_1675989023426', 188, 187);
INSERT INTO public.guessing VALUES ('user_1676047184667', 910, 909);
INSERT INTO public.guessing VALUES ('user_1676047184667', 633, 632);
INSERT INTO public.guessing VALUES ('user_1676047184666', 802, 801);
INSERT INTO public.guessing VALUES ('user_1676047184666', 670, 669);
INSERT INTO public.guessing VALUES ('user_1676047184667', 360, 357);
INSERT INTO public.guessing VALUES ('user_1676047184667', 35, 34);
INSERT INTO public.guessing VALUES ('user_1676047184667', 46, 45);
INSERT INTO public.guessing VALUES ('user_1676047255310', 23, 22);
INSERT INTO public.guessing VALUES ('user_1676047255310', 191, 190);
INSERT INTO public.guessing VALUES ('user_1676047255309', 621, 620);
INSERT INTO public.guessing VALUES ('user_1676047255309', 943, 942);
INSERT INTO public.guessing VALUES ('user_1676047255310', 601, 598);
INSERT INTO public.guessing VALUES ('user_1676047255310', 176, 175);
INSERT INTO public.guessing VALUES ('user_1676047255310', 527, 526);
INSERT INTO public.guessing VALUES ('user_1676047349540', 866, 865);
INSERT INTO public.guessing VALUES ('user_1676047349540', 3, 2);
INSERT INTO public.guessing VALUES ('user_1676047349539', 320, 319);
INSERT INTO public.guessing VALUES ('user_1676047349539', 630, 629);
INSERT INTO public.guessing VALUES ('user_1676047349540', 79, 76);
INSERT INTO public.guessing VALUES ('user_1676047349540', 460, 459);
INSERT INTO public.guessing VALUES ('user_1676047349540', 554, 553);
INSERT INTO public.guessing VALUES ('user_1676047409165', 140, 139);
INSERT INTO public.guessing VALUES ('user_1676047409165', 162, 161);
INSERT INTO public.guessing VALUES ('user_1676047409164', 956, 955);
INSERT INTO public.guessing VALUES ('user_1676047409164', 119, 118);
INSERT INTO public.guessing VALUES ('user_1676047409165', 121, 118);
INSERT INTO public.guessing VALUES ('user_1676047409165', 763, 762);
INSERT INTO public.guessing VALUES ('user_1676047409165', 471, 470);


--
-- PostgreSQL database dump complete
--

