import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

import SkillList from '../../Layout/SkillList';
import Concept from '@Concept';
import Framework from '@Framework';
import Tech from '@Tech';
import Tool from '@Tool';

const Skill = () => {
  const { skillSet } = usePortfolioAPI();

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
    <>
      <h5>SKILLS</h5>
      <div className="grid-4-col">
        <SkillList heading={'Concepts'} list={concepts} />
        <SkillList heading={'Technologies'} list={techs} />
        <SkillList heading={'Frameworks'} list={frameworks} />
        <SkillList heading={'Tools'} list={tools} />
      </div>
    </>
  );
};

export default Skill;
