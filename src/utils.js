import { CASE_STUDIES } from './constants';
import { HOME_ROUTE } from './constants/routes';

export const getNextCaseStudyRoute = (caseStudy) => {
  let nextCaseStudy;

  CASE_STUDIES.forEach((cs, i) => {
    if (cs.title === caseStudy) {
      nextCaseStudy = CASE_STUDIES[i + 1];
    }
  });

  return (nextCaseStudy && nextCaseStudy.to) || HOME_ROUTE;
}
