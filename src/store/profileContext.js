import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // http://localhost:8080 (when server is on this device)
    // http://192.168.1.73:8080 (when server is on HP Laptop and connected to   // home wifi)
    // https://192.168.1.73:8443 (when server is on HP Laptop, using HTTPS, and // connected to home wifi)

    // 'NET::ERR_CERT_AUTHORITY_INVALID' error.
    // Had a problem using HTTPS even after double checking
    // the backend code until I enteterd
    // 'https://192.168.1.73:8443/profiles' in the browser and bypassed the
    // warning by clicking on the 'Advanced' link.

    async function fetchData() {
      const { data } = await axios.get('https://192.168.1.73:8443/profiles');
      setProfile(data.find((profile) => profile.id === 1));
    }

    fetchData();
  }, []);

  if (profile === null) {
    console.log('Error: Context is null');
    return null;
  }

  const firstName = profile.identity.name.first;
  const lastName = profile.identity.name.last;
  const fullName = firstName + ' ' + lastName;

  const subCategory = profile.identity.role.subCategory.subCategoryName;
  const category = profile.identity.role.category.categoryName;
  const role = subCategory + ' ' + category;
  const email = profile.identity.contact.email.email;
  const countryCode = profile.identity.contact.phone.countryCode;
  const number = profile.identity.contact.phone.number;
  const phoneNumber = countryCode + ' ' + number;
  const island = profile.identity.contact.address.island;
  const region = profile.identity.contact.address.region;
  const location = island + ', ' + region;
  const summary = profile.identity.summary.summary;
  const concepts = profile.industry.concepts;
  const techs = profile.industry.techs;
  const frameworks = profile.industry.frameworks;
  const tools = profile.industry.tools;
  const educations = profile.educations;
  const experiences = profile.experiences;

  return (
    <ProfileContext.Provider
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
    </ProfileContext.Provider>
  );
}

// Create a hook to use the ProfileContext
export function useProfileAPI() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
