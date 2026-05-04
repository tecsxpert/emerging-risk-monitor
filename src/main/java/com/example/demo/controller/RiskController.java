package com.example.demo.controller;

import com.example.demo.entity.Risk;
import com.example.demo.service.RiskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/risks")
public class RiskController {

    @Autowired
    private RiskService riskService;

    @GetMapping("/test")
    public String testApi() {
        return "Risk API is working!";
    }

    @PostMapping
    public Risk saveRisk(@RequestBody Risk risk) {
        return riskService.saveRisk(risk);
    }

    @GetMapping
    public List<Risk> getAllRisks() {
        return riskService.getAllRisks();
    }

    @GetMapping("/{id}")
    public Risk getRiskById(@PathVariable Long id) {
        return riskService.getRiskById(id);
    }

    @PutMapping("/{id}")
    public Risk updateRisk(@PathVariable Long id, @RequestBody Risk risk) {
        return riskService.updateRisk(id, risk);
    }

    @DeleteMapping("/{id}")
    public String deleteRisk(@PathVariable Long id) {
        riskService.deleteRisk(id);
        return "Risk deleted successfully!";
    }
}