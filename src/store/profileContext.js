import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from 'react';

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const [profile, setProfile] = useState(null);

  const fetchDataWithJavaAPI = useCallback(async () => {
    // http://localhost:8080/profiles (when server is on this device)
    // http://192.168.1.73:8080/profiles (when server is on HP Laptop)
    // https://192.168.1.73:8443/profiles (when server is on HP Laptop and using HTTPS)

    try {
      const response = await fetch('http://localhost:8080/profiles');

      if (!response.ok) {
        throw new Error('Error fetching data!');
      }

      const data = await response.json();

      setProfile(data.find((profile) => profile.id === 1));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchDataWithFirebaseAPI = useCallback(async () => {
    try {
      const response = await fetch(
        'https://folio-84465-default-rtdb.firebaseio.com/0.json'
      );

      if (!response.ok) {
        throw new Error('Error fetching data!');
      }

      const data = await response.json();

      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchDataWithFirebaseAPI();
  }, [fetchDataWithFirebaseAPI]);

  if (profile === null) {
    return null;
  }

  //Might be better to do this on the server with a dto
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

// Creating a custom hook
export function useProfileAPI() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
