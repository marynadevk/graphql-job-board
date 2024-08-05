import { companyEntity } from '../../db/companies.js';
import { notFoundException } from '../../utils/errorHandlers.js';
import { errorMessages } from '../../utils/errorMessages.js';

export const CompanyQuery = {
  company: async (_root, { id }) => {
    const company = await companyEntity.getCompany(id);
    if (!company) {
      throw notFoundException(errorMessages.COMPANY_NOT_FOUND + id);
    }
    return company;
  },
};
