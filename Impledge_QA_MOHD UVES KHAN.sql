

/* sql excercise 1 */ 

select * from doctors where doctor_id in (select attending_doctor_id from admissions);

/* sql excercise 2 */ 

select * from doctors where doctor_id  not in (select attending_doctor_id from admissions);

/* sql excercise 3 */ 

select * from patients p left join admissions a on p.patient_id = a.patient_id
where a.attending_doctor_id is null;

