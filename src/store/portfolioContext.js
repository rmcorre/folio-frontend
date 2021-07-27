import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const PortfolioContext = createContext();

export function PortfolioContextProvider({ children }) {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // http://localhost:8080 (when server is on this device)
    // http://192.168.1.73:8080 (when server is on HP Laptop and connected to   // home wifi)
    // https://192.168.1.73:8443 (when server is on HP Laptop, using HTTPS, and // connected to home wifi)

    // Had a problem using HTTPS, even after double checking the code in
    // SpringBoot application until I entered
    // 'https://192.168.1.73:8443/profiles' in the browser and accepted the
    // warning by clicking on the 'Advanced' link. Kept getting
    // 'NET::ERR_CERT_AUTHORITY_INVALID' error.

    async function fetchData() {
      const { data } = await axios.get(' http://localhost:8080/profiles');
      setPortfolio(data.find((profile) => profile.id === 1));
    }

    fetchData();
  }, []);

  if (portfolio === null) {
    return null;
  }

  const firstName = portfolio.identity.name.first;
  const lastName = portfolio.identity.name.last;
  const fullName = firstName + ' ' + lastName;

  const subCategory = portfolio.identity.role.subCategory.subCategoryName;
  const category = portfolio.identity.role.category.categoryName;
  const role = subCategory + ' ' + category;
  const email = portfolio.identity.contact.email.email;
  const countryCode = portfolio.identity.contact.phone.countryCode;
  const number = portfolio.identity.contact.phone.number;
  const phoneNumber = countryCode + ' ' + number;
  const island = portfolio.identity.contact.address.island;
  const region = portfolio.identity.contact.address.region;
  const location = island + ', ' + region;
  const summary = portfolio.identity.summary.summary;
  const concepts = portfolio.industry.concepts;
  const techs = portfolio.industry.techs;
  const frameworks = portfolio.industry.frameworks;
  const tools = portfolio.industry.tools;
  const educations = portfolio.educations;
  const experiences = portfolio.experiences;

  return (
    <PortfolioContext.Provider
      value={{
        profile: {
          firstName: firstName,
          name: fullName,
          role: role,
          email: email,
          phoneNumber: phoneNumber,
          location: location,
          summary: summary,
        },
        skillSet: {
          concepts: concepts,
          techs: techs,
          frameworks: frameworks,
          tools: tools,
        },
        educations: educations,
        experiences: experiences,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

// Create a hook to use the PortfolioContext
export function usePortfolioAPI() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
