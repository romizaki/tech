SELECT 
	ANY_VALUE(DAY(date)) as 'day',
	ANY_VALUE(SUM(CASE WHEN score > 0 THEN score ELSE 0 END)) as 'num_pos_scores',
	ANY_VALUE(SUM(CASE WHEN score < 0 THEN score ELSE 0 END)) as 'num_neg_scores'
FROM assessments
WHERE date BETWEEN '2011-03-01' AND '2011-05-01'
GROUP BY day

SELECT DAY(date), score FROM assessments
WHERE score > 0 AND date BETWEEN '2011-01-01' AND '2011-05-01'