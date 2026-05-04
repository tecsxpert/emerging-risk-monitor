package com.example.demo.service;

import com.example.demo.entity.Risk;
import com.example.demo.repository.RiskRepository;
import com.example.demo.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiskService {

    @Autowired
    private RiskRepository riskRepository;

    // SAVE
    public Risk saveRisk(Risk risk) {
        return riskRepository.save(risk);
    }

    // GET ALL
    public List<Risk> getAllRisks() {
        return riskRepository.findAll();
    }

    // GET BY ID FIXED
    public Risk getRiskById(Long id) {
        return riskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Risk not found with id: " + id));
    }

    // UPDATE  FIXED
    public Risk updateRisk(Long id, Risk riskDetails) {

        Risk risk = riskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Risk not found with id: " + id));

        risk.setTitle(riskDetails.getTitle());
        risk.setDescription(riskDetails.getDescription());

        return riskRepository.save(risk);
    }

    // DELETE  FIXED
    public void deleteRisk(Long id) {

        Risk risk = riskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Risk not found with id: " + id));

        riskRepository.delete(risk);
    }
}