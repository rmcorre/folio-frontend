import React from 'react';
import { useProfileAPI } from '../../store/profileContext';

import Concept from '@Concept';
import Framework from '@Framework';
import Tech from '@Tech';
import Tool from '@Tool';

const Skills = () => {
  const { skillSet } = useProfileAPI();

  const concepts = skillSet.concepts.map(({ id, concept }) => (
    <li>
      <Concept key={id} concept={concept} />
    </li>
  ));

  const techs = skillSet.techs.map(({ id, tech }) => (
    <li>
      <Tech key={id} language={tech} />
    </li>
  ));

  const frameworks = skillSet.frameworks.map(({ id, framework }) => (
    <li>
      <Framework key={id} framework={framework} />
    </li>
  ));

  const tools = skillSet.tools.map(({ id, tool }) => (
    <li>
      <Tool key={id} tool={tool} />
    </li>
  ));

  return (
    <section class="skills">
      <div>
        <h5 className="text-uppercase">Skills</h5>
        <div>
          <div className="mb-4">
            <h6 className="mb-1">Concepts</h6>
            <ul className="list-unstyled">{concepts}</ul>
          </div>
          <div className="mb-4">
            <h6 className="mb-1">Tech</h6>
            <ul className="list-unstyled">{techs}</ul>
          </div>
          <div className="mb-4">
            <h6 className="mb-1">Frameworks</h6>
            <ul className="list-unstyled">{frameworks}</ul>
          </div>
          <div className="mb-4">
            <h6 className="mb-1">Tooling</h6>
            <ul className="list-unstyled">{tools}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
